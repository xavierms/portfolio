import { Box, MantineProvider } from '@mantine/core';
import { AboutSection } from './sections/AboutSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { JourneySection } from './sections/JourneySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { WritingSection } from './sections/WritingSection';
import { ScrollProgress } from './components/ScrollProgress';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { articles, journey } from './data/journey';
import { navigation } from './data/profile';
import { usePageScroll } from './hooks/usePageScroll';
import { theme } from './theme';

function Portfolio() {
  const { activeSection } = usePageScroll();
  const hasJourney = Object.values(journey).some((entries) => entries.length > 0);
  const hasWriting = articles.length > 0;
  const visibleNavigation = navigation.filter(({ id }) => (
    (id !== 'journey' || hasJourney) && (id !== 'writing' || hasWriting)
  ));

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ScrollProgress />
      <SiteHeader activeSection={activeSection} navigationItems={visibleNavigation} />
      <Box component="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        {hasJourney && <JourneySection journey={journey} />}
        {hasWriting && <WritingSection articles={articles} />}
        <ContactSection />
      </Box>
      <SiteFooter navigationItems={visibleNavigation} />
    </MantineProvider>
  );
}

export default Portfolio;
