import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// Color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
              grey: {
                  100: '#d7d9dc',
                  200: '#afb2b9',
                  300: '#878c97',
                  400: '#5f6574',
                  500: '#373f51',
                  600: '#2c3241',
                  700: '#212631',
                  800: '#161920',
                  900: '#0b0d10',
              },
              primary: {
                  100: '#dcddd9',
                  200: '#b8bab3',
                  300: '#95988c',
                  400: '#717566',
                  500: '#4e5340',
                  600: '#3e4233',
                  700: '#2f3226',
                  800: '#1f211a',
                  900: '#10110d',
              },
              greenAccent: {
                  100: '#dafaf2',
                  200: '#b5f5e4',
                  300: '#91efd7',
                  400: '#6ceac9',
                  500: '#47e5bc',
                  600: '#39b796',
                  700: '#2b8971',
                  800: '#1c5c4b',
                  900: '#0e2e26',
              },
              redAccent: {
                  100: '#fddee1',
                  200: '#fbbdc3',
                  300: '#f89da5',
                  400: '#f67c87',
                  500: '#f45b69',
                  600: '#c34954',
                  700: '#92373f',
                  800: '#62242a',
                  900: '#311215',
              },
              blueAccent: {
                  100: '#e6faf8',
                  200: '#cdf4f0',
                  300: '#b3efe9',
                  400: '#9ae9e1',
                  500: '#81e4da',
                  600: '#67b6ae',
                  700: '#4d8983',
                  800: '#345b57',
                  900: '#1a2e2c',
              },
          }
        : {
              grey: {
                  100: '#0b0d10',
                  200: '#161920',
                  300: '#212631',
                  400: '#2c3241',
                  500: '#373f51',
                  600: '#5f6574',
                  700: '#878c97',
                  800: '#afb2b9',
                  900: '#d7d9dc',
              },
              primary: {
                  100: '#10110d',
                  200: '#1f211a',
                  300: '#2f3226',
                  400: '#3e4233',
                  500: '#4e5340',
                  600: '#717566',
                  700: '#95988c',
                  800: '#b8bab3',
                  900: '#dcddd9',
              },
              greenAccent: {
                  100: '#0e2e26',
                  200: '#1c5c4b',
                  300: '#2b8971',
                  400: '#39b796',
                  500: '#47e5bc',
                  600: '#6ceac9',
                  700: '#91efd7',
                  800: '#b5f5e4',
                  900: '#dafaf2',
              },
              redAccent: {
                  100: '#311215',
                  200: '#62242a',
                  300: '#92373f',
                  400: '#c34954',
                  500: '#f45b69',
                  600: '#f67c87',
                  700: '#f89da5',
                  800: '#fbbdc3',
                  900: '#fddee1',
              },
              blueAccent: {
                  100: '#1a2e2c',
                  200: '#345b57',
                  300: '#4d8983',
                  400: '#67b6ae',
                  500: '#81e4da',
                  600: '#9ae9e1',
                  700: '#b3efe9',
                  800: '#cdf4f0',
                  900: '#e6faf8',
              },
          }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                      primary: {
                          main: colors.primary[500],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                  }
                : {
                      primary: {
                          main: colors.primary[100],
                      },
                      secondary: {
                          main: colors.greenAccent[500],
                      },
                      neutral: {
                          dark: colors.grey[700],
                          main: colors.grey[500],
                          light: colors.grey[100],
                      },
                      background: {
                          default: '#fcfcfc',
                      },
                  }),
        },
        typography: {
            fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 32,
            },
            h3: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 24,
            },
            h4: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 20,
            },
            h5: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 16,
            },
            h6: {
                fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        [],
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};
