import {middlewarePaths} from '@/paths';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  console.log({middlewarePaths});
  console.log('middleware', {url: request.url, middlewarePaths});
}

export const config = {
  matcher: [...middlewarePaths, 'two'],
};
