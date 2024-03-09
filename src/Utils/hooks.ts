import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../Data/store'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const useAuthGuard = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
        navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
};

export default useAuthGuard;
