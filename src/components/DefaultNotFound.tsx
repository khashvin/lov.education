import { Link } from '@tanstack/react-router';
import { MapPin, Book, Route, Home, ArrowLeft } from 'lucide-react';
import * as m from 'motion/react-m';
import { LazyMotion, domAnimation } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function DefaultNotFoundPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f5] px-4 py-16 dark:from-[#121826] dark:to-[#1a202c]">
        {/* Background decoration */}
        <m.div
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#001e57]/10 blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <m.div
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#89c540]/10 blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Text content */}
            <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold text-[#001e57] md:text-4xl lg:text-5xl dark:text-white">
                  Oops! Page Not Found
                </h1>

                <m.div
                  className="mt-3 flex items-center justify-center gap-3 lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="text-xl font-semibold text-[#89c540] md:text-2xl lg:text-3xl">
                    Error 404
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                  <div className="text-muted-foreground text-sm">
                    The page you're looking for cannot be found
                  </div>
                </m.div>
              </m.div>

              <m.p
                className="text-muted-foreground mx-auto max-w-2xl text-base md:text-lg lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                It seems we can't find the page you're looking for. The path may
                have been moved, deleted, or perhaps never existed.
              </m.p>

              <m.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#001e57] hover:bg-[#001e57]/90"
                >
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <MapPin className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </m.div>
            </div>

            {/* Illustration */}
            <m.div
              className="flex w-full justify-center lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="w-full max-w-md border-[#001e57]/10 bg-white/50 shadow-xl backdrop-blur-sm dark:bg-[#1e293b]/50">
                <CardContent className="p-8">
                  <div className="relative">
                    <m.div
                      className="relative z-10 mb-6"
                      animate={{
                        rotateZ: [0, 2, 0, -2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                      }}
                    >
                      <img
                        src="/logo-header.png"
                        alt="Literacy of Virtue"
                        className="mx-auto h-20"
                      />
                    </m.div>

                    <m.div className="mb-8 flex justify-center">
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#001e57]/5">
                        <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-[#001e57]/20"></div>
                        <m.div
                          className="text-7xl font-bold text-[#001e57]/20"
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [0.95, 1, 0.95],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        >
                          404
                        </m.div>
                      </div>
                    </m.div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-[#89c540]" />
                        <div className="text-muted-foreground text-sm">
                          Lost in navigation?
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Route className="h-5 w-5 text-[#89c540]" />
                        <div className="text-muted-foreground text-sm">
                          We can help find your path.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center bg-[#001e57]/5 p-4">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-[#001e57] hover:bg-[#001e57]/10 hover:text-[#001e57]/90"
                  >
                    <Link to="/" className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back to education</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
