import "./globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Box } from "@/components/ui/box";
import StyledJsxRegistry from "./registry";
import { Navbar } from "./page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box className="top-0 sticky z-50 hidden md:flex">
            <Navbar />
        </Box>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">
              {children}
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
