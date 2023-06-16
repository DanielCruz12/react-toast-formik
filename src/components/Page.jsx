import { useInfiniteQuery } from "@tanstack/react-query";

const Page = () => {

  const posts = [
    { value: 1, label: "pepe" },
    { value: 2, label: "pep" },
    { value: 3, label: "pe" },
    { value: 4, label: "pasd" },
    { value: 5, label: "pasd" },
    { value: 6, label: "pcc" },
    { value: 7, label: "pfdf" },
    { value: 8, label: "puuu" },
  ]

  const fecthPost = async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return posts.slice((page - 1) * 2, page * 2)
  }

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const response = await fecthPost(pageParam)
      return response
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: {
        pages: [posts.slice(0, 2)],
        pageParams: [1]
      }
    }
  )
  return <div className="w-full">
    {data?.pages.map((page, i) => (
      <div key={i}>{page.map((post, i) => (
        <div key={i} className="w-full">{post.label}</div>
      ))}
      </div>
    ))}
    <button className="text-white w-52 flex gap-2 flex-wrap w-100 bg-orange-400 mt-4 mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
      {isFetchingNextPage ? 'loading users' : (data?.pages.length ?? 0) < 3 ? 'load more users' : 'Nothing more to load'}

    </button>
  </div>
}
export default Page