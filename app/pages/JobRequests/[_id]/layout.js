'use client'

/** FUTURE ME!!!! REMEMBER
 * 
 *  ABSOLUTELY NO FORMATTING THIS FILE 
 *  USING ANY FORMATTER 
 *  UNLESS YOU'VE CHANGED SYNTAX TO
 *  HTML
 * 
 *  
**/
export default function RootLayout({
  children,
}/*: {
  children: React.ReactNode
}*/) {
  return (
    <html lang="en">
      <head>

        <meta
          property="og:title"
          content="SomeProgrammer's Portfolio"

        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../../../favicon-32x32.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}




