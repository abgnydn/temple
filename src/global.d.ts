// Type augmentation for Next.js `<style jsx>` blocks. Avoids pulling in the
// full `styled-jsx` package — these components are consumed inside a Next
// runtime that provides the actual implementation.
import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
