import { NextResponse } from 'next/server'

/**
 * Pemeriksaan struktur token sederhana untuk Edge Runtime.
 *
 * Catatan:
 * Verifikasi JWT utama tetap dilakukan pada API melalui src/lib/auth.js.
 * Middleware digunakan sebagai lapisan awal untuk melindungi halaman admin.
 */
function verifyTokenSimple(token) {
  if (!token) {
    return false
  }

  try {
    const parts = token.split('.')

    if (parts.length !== 3) {
      return false
    }

    const payloadBase64 = parts[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/')

    const payload = JSON.parse(
      atob(payloadBase64),
    )

    if (
      payload.exp &&
      payload.exp * 1000 < Date.now()
    ) {
      return false
    }

    return payload.authenticated === true
  } catch (error) {
    console.error(
      '[Middleware] Invalid token structure:',
      error,
    )

    return false
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  /**
   * Lindungi halaman admin.
   */
  if (pathname.startsWith('/admin')) {
    const token =
      request.cookies.get('auth_token')?.value

    const isLoggedIn = verifyTokenSimple(token)

    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL('/login', request.url),
      )
    }
  }

  /**
   * Daftar API yang memerlukan autentikasi.
   */
  const protectedApiRoutes = [
    '/api/articles/create',
    '/api/articles',
    '/api/resources',
    '/api/categories',
    '/api/media/upload',
  ]

  const isProtectedApi =
    protectedApiRoutes.some((route) => {
      /**
       * Articles:
       * GET publik.
       * Method perubahan data dilindungi.
       */
      if (route === '/api/articles') {
        return (
          pathname === route &&
          !['GET', 'HEAD'].includes(request.method)
        )
      }

      /**
       * Resources:
       * GET publik.
       * Method perubahan data dilindungi.
       */
      if (route === '/api/resources') {
        return (
          pathname === route &&
          !['GET', 'HEAD'].includes(request.method)
        )
      }

      /**
       * Categories:
       * GET publik.
       * Method perubahan data dilindungi.
       */
      if (route === '/api/categories') {
        return (
          pathname.startsWith(route) &&
          !['GET', 'HEAD'].includes(request.method)
        )
      }

      /**
       * Route lainnya selalu dilindungi.
       */
      return pathname.startsWith(route)
    })

  if (isProtectedApi) {
    const token =
      request.cookies.get('auth_token')?.value

    const isLoggedIn = verifyTokenSimple(token)

    if (!isLoggedIn) {
      return NextResponse.json(
        {
          error:
            'Unauthorized: Authentication required',
        },
        {
          status: 401,
        },
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}