import ReactFullpage from '@fullpage/react-fullpage';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

const FullPageLayout = ({ children }: FullPageLayoutProps) => {
  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      credits={{}}
      scrollingSpeed={700}
      easing="easeInOutCubic"
      navigation={true}
      navigationPosition="right"
      navigationTooltips={['Home', 'About', 'Portfolio', 'Contact']}
      showActiveTooltip={true}
      anchors={['home', 'about', 'portfolio', 'contact']}
      keyboardScrolling={true}
      animateAnchor={true}
      recordHistory={true}
      controlArrows={false}
      verticalCentered={false}
      responsiveWidth={768}
      autoScrolling={true}
      fitToSection={true}
      fitToSectionDelay={1000}
      scrollBar={false}
      touchSensitivity={5}
      normalScrollElementTouchThreshold={5}
      bigSectionsDestination="top"
      render={() => (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageLayout;