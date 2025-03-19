import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Skeleton */}
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] md:gap-6 lg:gap-10 px-4 py-6">
        {/* Sidebar Skeleton */}
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <div className="flex flex-col gap-2 py-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} className="h-10 w-full" />
            ))}
          </div>
        </aside>

        {/* Content Skeleton */}
        <main className="flex w-full flex-col gap-6">
          {/* Back Button Skeleton */}
          <Skeleton className="h-10 w-32" />

          {/* Job Header Skeleton */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-48 mb-2" />
                <div className="flex flex-wrap gap-2 mt-2">
                  <Skeleton className="h-6 w-32 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 self-start">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </div>

          {/* Job Details Skeleton */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 rounded-lg border p-6">
              <Skeleton className="h-6 w-48 mb-6" />
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <div className="space-y-1 pl-5">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <Skeleton key={item} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <div className="space-y-1 pl-5">
                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                      <Skeleton key={item} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border p-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <div key={item} className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                    <Skeleton key={item} className="h-6 w-24 rounded-full" />
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

