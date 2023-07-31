module.exports = {
  presets: [
    [
      '@nx/react/babel',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'styled-components',
      {
        pure: true,
        ssr: true,
      },
    ],
  ],
}
