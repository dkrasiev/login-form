import { useSelector } from 'react-redux'

import { selectUser } from '../providers/store'

export const useUser = () => {
  return useSelector(selectUser)
}
