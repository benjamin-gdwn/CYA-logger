import { Box, styled, useTheme } from '@mui/material';

/**
 * Layout Header component
 */
export const PageLayoutHeader = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: 32,
  paddingRight: 32,
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}));


/**
 * Layout Aside component. Located on the left side of the Page Layout
 */
export const PageLayoutAside = styled(Box)(() => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down('sm')
  return {
    maxWidth: isMobile ? '100%' : 256,
  };
});


/**
 * Content Container component wraps and aligns Aside and Main components
 */
export const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0px, 1fr) auto',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

/**
 * Layout Main component
 */
export const PageLayoutMain = ({ children, ...props }: Omit<React.ComponentProps<typeof Box>, 'ref' | 'id'>) => {

  const header = document.getElementById('page-layout-header');
  const aside = document.getElementById('page-layout-aside');
  const asideRight = document.getElementById('page-layout-aside-right');
  const container = document.getElementById('content-container');

  const hasBorderRadius = Boolean(header?.clientHeight && aside?.clientWidth);
  const hasBorderRadiusRight = Boolean(header?.clientHeight && asideRight?.clientWidth);

  let display;

  if (container instanceof HTMLElement) {
    const computedStyle = getComputedStyle(container);
    display = computedStyle.display;
  }

  console.log(header?.offsetHeight)

  return (
    <Box
      id="page-layout-main"
      {...props}
      sx={{
        borderTop: 'solid 1px #ededed',
        borderTopLeftRadius: hasBorderRadius ? 12 : 0,
        borderTopRightRadius: hasBorderRadiusRight ? 12 : 0,
        px: {
          xs: 2,
          sm: 4,
        },
        pb: '100px',
        pt: '100px',
        flex: 1,
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

/**
 * Page Layout component combines Header, Aside and Main components
 */
export const PageLayout = styled(Box)({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flex: 1,
});
