import ReactFullpage from '@fullpage/react-fullpage';

interface FullPageLayoutProps {
  children: React.ReactNode;
}

const FullPageLayout = ({ children }: FullPageLayoutProps) => {
  return (
    <ReactFullpage
      licenseKey="YOUR_LICENSE_KEY"
      credits={{}}
      scrollingSpeed={1000}
      navigation={true}
      navigationPosition="right"
      navigationTooltips={['Home', 'About', 'Portfolio', 'Contact']}
      showActiveTooltip={true}
      sectionsColor={['', '', '', '']}
      anchors={['home', 'about', 'portfolio', 'contact']}
      menu="#menu"
      keyboardScrolling={true}
      animateAnchor={true}
      recordHistory={true}
      controlArrows={false}
      verticalCentered={true}
      responsiveWidth={768}
      render={() => (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageLayout;