import { Link } from "@tanstack/react-router"
import { MapPin, Book, Route, Home, ArrowLeft } from "lucide-react"
import * as m from "motion/react-m"
import { LazyMotion, domAnimation } from "motion/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function DefaultNotFoundPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-[80vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f5] dark:from-[#121826] dark:to-[#1a202c]">
        {/* Background decoration */}
        <m.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-[#001e57]/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <m.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#89c540]/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001e57] dark:text-white">
                  Oops! Page Not Found
                </h1>
                
                <m.div 
                  className="flex items-center gap-3 mt-3 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#89c540]">
                    Error 404
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                  <div className="text-sm text-muted-foreground">
                    The page you're looking for cannot be found
                  </div>
                </m.div>
              </m.div>
              
              <m.p 
                className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                It seems we can't find the page you're looking for. The path may have been moved, 
                deleted, or perhaps never existed.
              </m.p>
              
              <m.div
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button asChild size="lg" className="bg-[#001e57] hover:bg-[#001e57]/90">
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
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Card className="bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-sm border-[#001e57]/10 shadow-xl w-full max-w-md">
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
                      <img src="/logo-header.png" alt="Literacy of Virtue" className="h-20 mx-auto" />
                    </m.div>
                    
                    <m.div className="flex justify-center mb-8">
                      <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-[#001e57]/5">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#001e57]/20 animate-spin-slow"></div>
                        <m.div
                          className="text-7xl font-bold text-[#001e57]/20" 
                          animate={{ 
                            opacity: [0.2, 0.4, 0.2],
                            scale: [0.95, 1, 0.95],
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          404
                        </m.div>
                      </div>
                    </m.div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-[#89c540]" />
                        <div className="text-sm text-muted-foreground">Lost in navigation?</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Route className="h-5 w-5 text-[#89c540]" />
                        <div className="text-sm text-muted-foreground">We can help find your path.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-[#001e57]/5 p-4 flex justify-center">
                  <Button asChild variant="ghost" size="sm" className="text-[#001e57] hover:text-[#001e57]/90 hover:bg-[#001e57]/10">
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
  )
}
