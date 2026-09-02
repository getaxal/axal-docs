import { Fragment } from 'react'
import { LuHouse } from 'react-icons/lu'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { PageRoutes } from '@/lib/pageroutes'
import { Link } from '@/lib/transition'
import { toTitleCase } from '@/utils/toTitleCase'

interface BreadcrumbProps {
  paths: string[]
}

export function ArticleBreadcrumb({ paths }: BreadcrumbProps) {
  return (
    <Breadcrumb className="pb-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              aria-label="Documentation Home"
              href={`/docs${PageRoutes[0].href}`}
              title="Documentation Home"
            >
              <LuHouse className="h-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {paths.length > 2 ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {/* Section-root paths (e.g. "getting-started") have no real page of their
                  own in this site, so this can't be a link — it would 404. */}
              <BreadcrumbPage>{toTitleCase(paths[0])}</BreadcrumbPage>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis className="h-1" />
            </BreadcrumbItem>

            {paths.slice(-1).map((path, i) => {
              const index = paths.length - 1 + i
              const href = `/docs/${paths.slice(0, index + 1).join('/')}`

              return (
                <Fragment key={path}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index < paths.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link aria-label={toTitleCase(path)} href={href} title={toTitleCase(path)}>
                          {toTitleCase(path)}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="b">{toTitleCase(path)}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              )
            })}
          </>
        ) : (
          paths.map((path, index) => {
            // Only the final segment is a real page — every path before it is a
            // section root with no index page of its own, so it can't be a link.
            const isLast = index === paths.length - 1

            return (
              <Fragment key={path}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className={isLast ? 'b' : undefined}>
                    {toTitleCase(path)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </Fragment>
            )
          })
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
