import { selectUser, useAppSelector } from '../providers/store'

export const useUser = () => {
  return useAppSelector(selectUser)
}
