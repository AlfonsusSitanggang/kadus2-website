'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import CategoryBadge from './CategoryBadge'
import { getLocaleFromPath, addLocaleToPath } from '@/lib/i18n-config'

export default function ArticleList({ articles, showMoreLink = true }) {
  const [categories, setCategories] = useState([])
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)

  useEffect(() => {
    fetch('/api/categories?type=article')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error fetching categories:', err))
  }, [])

  const getLocalizedPath = (path) => {
    return addLocaleToPath(path, currentLocale)
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">
          Berita Terbaru
        </h2>

        {showMoreLink && (
          <Link
            href={getLocalizedPath('/berita')}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Lihat semua berita →
          </Link>
        )}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-500">
          Belum ada berita.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(({
            id,
            title,
            description,
            category,
            thumbnail,
            date
          }) => (
            <Card
              key={id}
              className="overflow-hidden flex flex-col"
            >
              {thumbnail && (
                <Link href={getLocalizedPath(`/berita/${id}`)}>
                  <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-52 object-cover"
                  />
                </Link>
              )}

              <CardHeader className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {category && (
                    <CategoryBadge
                      category={category}
                      categories={categories}
                    />
                  )}
                </div>

                {date && (
                  <p className="text-sm text-gray-500">
                    {new Date(date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                )}

                <Link
                  href={getLocalizedPath(`/berita/${id}`)}
                  className="hover:text-blue-600 transition-colors"
                >
                  <CardTitle className="mt-2">
                    {title}
                  </CardTitle>
                </Link>

                <CardDescription className="mt-2">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}