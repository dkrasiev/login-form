import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { User } from '../modules/user'
import { AppRoute } from '../providers/router'
import { useUser } from './use-user'

/**
 * Generates a user guard hook that checks if the user is logged in and redirects to a specified path if not.
 *
 * @param {Function} checkFn - A function that takes in a user object and returns a boolean indicating if the user should be redirected. Defaults to a function that checks if the user is null or undefined.
 * @param {string} redirectPath - The path to redirect to if the user should be redirected. Defaults to the home path.
 * @return {void}
 */
export const useUserGuard = (
  checkFn = (user?: User) => !user,
  redirectPath = AppRoute.HOME,
) => {
  const navigate = useNavigate()
  const user = useUser()

  const redirect = useCallback(() => {
    navigate(redirectPath)
  }, [navigate, redirectPath])

  useEffect(() => {
    if (checkFn(user)) {
      redirect()
    }
  }, [user, redirect, checkFn])
}
