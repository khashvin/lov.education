import { Link } from '@tanstack/react-router';
import { ArrowLeft, ExternalLink, Home, RefreshCw } from 'lucide-react';
import { domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';

import { Button } from '@/components/ui/button';

export interface DefaultErrorPageProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export function DefaultErrorPage({
  error,
  resetErrorBoundary,
}: DefaultErrorPageProps) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-[#121826]">
        {/* Main content */}
        <div className="relative mx-auto w-full max-w-3xl">
          {/* Background decorations */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <m.div
              className="absolute -top-64 -right-64 h-96 w-96 rounded-full bg-[#001e57]/5"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <m.div
              className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#89c540]/5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="relative">
            {/* Top section - Visual */}
            <div className="text-center">
              <div className="mb-8 flex w-full justify-center">
                <m.div
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* 404 Text */}
                  <div className="relative">
                    <m.div
                      className="text-[180px] leading-none font-bold text-[#001e57]/5 dark:text-white/5"
                      initial={{ scale: 0.9 }}
                      animate={{
                        scale: [0.9, 1, 0.9],
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      Oops!
                    </m.div>

                    {/* Broken connection illustration */}
                    <m.div
                      className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#001e57] text-white">
                        <m.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <RefreshCw className="h-8 w-8" />
                        </m.div>
                      </div>

                      <m.div
                        className="mx-2 h-1 w-24 bg-gradient-to-r from-[#001e57] to-transparent"
                        animate={{
                          opacity: [1, 0.3, 1],
                          scaleX: [1, 0.8, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#89c540] text-white">
                        <m.div
                          animate={{
                            y: [0, -3, 0, 3, 0],
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{ duration: 5, repeat: Infinity }}
                        >
                          <ExternalLink className="h-8 w-8" />
                        </m.div>
                      </div>
                    </m.div>
                  </div>
                </m.div>
              </div>
            </div>

            {/* Bottom section - Content */}
            <m.div
              className="overflow-hidden rounded-2xl border border-[#001e57]/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#1a1d2a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="border-b border-gray-100 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-[#1e293b]">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center font-mono text-sm text-gray-500 dark:text-gray-400">
                    Error • {error?.name || 'Application Error'}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="mb-3 text-3xl font-bold text-[#001e57] dark:text-white">
                      Something went wrong
                    </h1>
                    <p className="mx-auto max-w-lg text-gray-500 dark:text-gray-400">
                      We encountered an unexpected error. Our team has been
                      notified and is working to fix the issue.
                    </p>
                  </div>

                  {error && (
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                      <div className="max-h-[100px] overflow-auto font-mono text-sm text-gray-700 dark:text-gray-300">
                        <div className="mb-1 text-red-500 dark:text-red-400">
                          {error.name}: {error.message}
                        </div>
                        {error.stack && (
                          <div className="text-xs whitespace-pre-wrap text-gray-500 dark:text-gray-400">
                            {error.stack.split('\n').slice(1, 4).join('\n')}...
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col justify-center gap-3 border-t border-gray-100 pt-6 sm:flex-row dark:border-gray-800">
                    {resetErrorBoundary && (
                      <Button
                        onClick={resetErrorBoundary}
                        className="bg-[#001e57] hover:bg-[#001e57]/90"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Try Again</span>
                      </Button>
                    )}

                    <Button asChild variant="outline">
                      <Link to="/">
                        <Home className="mr-2 h-4 w-4" />
                        <span>Return to Home</span>
                      </Link>
                    </Button>

                    <Button
                      onClick={() => window.history.back()}
                      variant="ghost"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      <span>Go Back</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 text-center dark:bg-[#1e293b]">
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <img
                    src="/logo-header.png"
                    alt="Literacy of Virtue"
                    className="mr-2 h-6"
                  />
                  <span>
                    Literacy of Virtue • Error ID:{' '}
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
