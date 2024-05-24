import { getUsers } from '../services/users.js'
import { type UserArr } from '../types'
import { useInfiniteQuery } from '@tanstack/react-query'
export const useUsers = () => {
  const { isLoading, isError, data, fetchNextPage, refetch } = useInfiniteQuery(
    {
      queryKey: ['users'],
      queryFn: getUsers,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: 1,
      refetchOnWindowFocus: false
    }
  )

  const users: UserArr = data?.pages?.flatMap((page) => page.users) ?? []

  return {
    isLoading,
    isError,
    users,
    fetchNextPage,
    refetch
  }
}
