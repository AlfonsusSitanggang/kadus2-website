'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import CategoryBadge from './CategoryBadge'

export default function ArticleList({
  articles = [],
  showMoreLink = true,
}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/categories?type=article')
      .then((res) => res.json())
      .then((data) => {
        setCategories(
          Array.isArray(data) ? data : [],
        )
      })
      .catch((error) => {
        console.error(
          'Error fetching categories:',
          error,
        )

        setCategories([])
      })
  }, [])

  const safeArticles = Array.isArray(articles)
    ? articles
    : []

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Berita
        </h2>

        {showMoreLink && (
          <Link
            href="/berita"
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            Lihat semua berita →
          </Link>
        )}
      </div>

      {safeArticles.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Belum ada berita yang dipublikasikan.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {safeArticles.map(
            ({
              id,
              title,
              description,
              category,
              thumbnail,
              date,
            }) => (
              <Card
                key={id}
                className="overflow-hidden transition-shadow hover:shadow-md"
              >
                {thumbnail && (
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={thumbnail}
                      alt={title || 'Gambar berita'}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}

                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {category && (
                      <CategoryBadge
                        category={category}
                        categories={categories}
                      />
                    )}

                    {date && (
                      <span className="text-xs text-muted-foreground">
                        {new Date(date).toLocaleDateString(
                          'id-ID',
                          {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          },
                        )}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/berita/${id}`}
                    className="group"
                  >
                    <CardTitle className="line-clamp-2 transition-colors group-hover:text-blue-600">
                      {title}
                    </CardTitle>
                  </Link>

                  {description && (
                    <CardDescription className="line-clamp-3">
                      {description}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            ),
          )}
        </div>
      )}
    </section>
  )
}