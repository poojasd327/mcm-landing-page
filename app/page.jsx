'use client';
import { Box, Card, Fade, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import gunjurImg from '../src/assets/Gunjur.jpeg';
import bhuvaneshwariImg from '../src/assets/bhuvaneshwari nagar.jpeg';
import budigereImg from '../src/assets/budigere.jpg';
import img2Img from '../src/assets/img-2.png';
import img3Img from '../src/assets/img-3 (1).png';
import logoImg from '../src/assets/mCM logo dd.svg';
import phoneImg from '../src/assets/phone (1).png';
import dasarahalliImg from '../src/assets/t-dasarahalli.jpeg';
import testImg from '../src/assets/test.png';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 0,
        px: 0,
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {/* Fixed Sticky Pill Header */}
      <Box
        sx={{
          position: 'fixed',
          top: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 'calc(100% - 96px)', md: isScrolled ? '650px' : 'calc(100% - 96px)' },
          maxWidth: { xs: 'none', md: isScrolled ? '650px' : '1440px' },
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Box
          sx={{
            width: '100%',
            bgcolor: '#ffffff',
            borderRadius: { xs: '60px', md: '100px' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: '20px', md: isScrolled ? 3 : 5 },
            py: { xs: '14px', md: 2 },
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Logo Section */}
          <Box
            component="a"
            href="https://www.mychickenandmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logoImg.src}
              alt="My Chicken and More Logo"
              sx={{
                height: { xs: '32px', md: '44px' },
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {['Locations', 'How to Redeem'].map((item) => (
              <Typography
                key={item}
                component={Link}
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                sx={{
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#1d1a40',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.7 }
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Mobile Hamburger Menu */}
          <Box
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              gap: '4px',
              cursor: 'pointer',
              zIndex: 1200
            }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'rgb(29, 26, 64)', borderRadius: '20px' }}
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'rgb(29, 26, 64)', borderRadius: '20px' }}
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              style={{ width: '24px', height: '2px', backgroundColor: 'rgb(29, 26, 64)', borderRadius: '20px' }}
            />
          </Box>
        </Box>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              sx={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                width: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: 1090
              }}
            >
              {['Locations', 'How to Redeem'].map((item) => (
                <Box
                  key={item}
                  component={Link}
                  href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  sx={{
                    px: 3,
                    py: 2,
                    textDecoration: 'none',
                    color: '#1d1a40',
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    '&:last-child': { borderBottom: 'none' },
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' }
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          )}
        </AnimatePresence>
      </Box>

      <Fade in={true} timeout={1000}>
        <Box sx={{
          width: '100%',
          maxWidth: 'none',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, md: 4 }
        }}>
          {/* Main Hero Card */}
          <Box
            component={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            sx={{ width: '100%' }}
          >
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 'none',
                placeContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: { xs: '100vh', md: 820 },
                padding: 0,
                borderRadius: 0,
                position: 'relative',
                overflow: 'hidden',
                willChange: 'transform',
                border: 'none'
              }}
            >
              {/* Desktop Image */}
              <Box
                component="img"
                src={testImg.src}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: { xs: 'none', md: 'block' }
                }}
              />
              {/* Mobile Image */}
              <Box
                component="img"
                src={phoneImg.src}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: { xs: 'block', md: 'none' }
                }}
              />
            </Card>
          </Box>

          {/* Row with two cards */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flexDirection: { xs: 'column', lg: 'row' },
              flex: 'none',
              alignItems: 'stretch',
              gap: '16px',
              width: '100%',
              height: 'auto',
              px: '10px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Left Card: Munch! */}
            <Box
              component={motion.div}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{
                width: { xs: '358.4px', lg: 'calc(65% - 8px)' },
                height: { xs: '400px', lg: 500 },
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                component="img"
                src={img2Img.src}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>

            {/* Right Card: The one® is back */}
            <Box
              component={motion.div}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ width: { xs: '358.4px', lg: 'calc(35% - 8px)' } }}
            >
              <Card
                elevation={0}
                sx={{
                  width: '100%',
                  height: { xs: '400px', lg: 500 },
                  borderRadius: '24px',
                  bgcolor: '#e2f9e1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  pt: 6,
                  px: 4,
                  position: 'relative',
                  border: 'none'
                }}
              >
                <Box
                  component="img"
                  src={img3Img.src}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Card>
            </Box>
          </Box>
          {/* Store Locator Section */}
          <Box
            id="locations"
            sx={{
              width: '100%',
              maxWidth: '1440px',
              mx: 'auto',
              mt: 8,
              mb: 12,
              px: { xs: '20px', md: '40px' }
            }}
          >
            <Typography
              variant="h4"
              component={motion.h4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ fontWeight: 800, mb: 4, color: 'text.primary', textAlign: 'center', fontFamily: 'var(--font-figtree), sans-serif' }}
            >
              Offer Available Only At These Stores
            </Typography>

            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                gap: 3
              }}
            >
              {[
                { name: 'Budigere Cross', rating: '4.9', stars: '★★★★★' },
                { name: 'Bhuvaneshwari Nagar', rating: '4.9', stars: '★★★★★' },
                { name: 'T Dasarahalli', rating: '4.8', stars: '★★★★★' },
                { name: 'Gunjur', rating: '4.9', stars: '★★★★★' }
              ].map((store, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  variants={itemVariants}
                >
                  <Card
                    component={motion.div}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    elevation={0}
                    sx={{
                      height: 480,
                      borderRadius: '24px',
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        borderColor: '#999999'
                      }
                    }}
                  >
                    {[
                      {
                        name: 'Budigere Cross',
                        rating: '4.9',
                        stars: '★★★★★',
                        image: budigereImg.src,
                        link: 'https://share.google/ZES5JffNIpNPsRGsc'
                      },
                      {
                        name: 'Bhuvaneshwari Nagar',
                        rating: '4.9',
                        stars: '★★★★★',
                        image: bhuvaneshwariImg.src,
                        link: 'https://share.google/exKnj98vmRcnN2ZVA'
                      },
                      {
                        name: 'T Dasarahalli',
                        rating: '4.8',
                        stars: '★★★★★',
                        image: dasarahalliImg.src,
                        link: 'https://share.google/WJdgIfdPlKvESATfV'
                      },
                      {
                        name: 'Gunjur',
                        rating: '4.9',
                        stars: '★★★★★',
                        image: gunjurImg.src,
                        link: 'https://share.google/ycC7P1ty0dWSFaMAm'
                      }
                    ][index] && (
                        <>
                          {/* Branch Image */}
                          <Box
                            sx={{
                              width: '100%',
                              height: 280,
                              bgcolor: '#f5f5f7',
                              borderRadius: '16px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              overflow: 'hidden',
                              position: 'relative'
                            }}
                          >
                            <Box
                              component="img"
                              src={[
                                { image: budigereImg.src },
                                { image: bhuvaneshwariImg.src },
                                { image: dasarahalliImg.src },
                                { image: gunjurImg.src }
                              ][index].image}
                              alt={store.name}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </Box>

                          {/* Content Section (Bottom) */}
                          <Box sx={{ px: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ mb: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.3, mb: 0.5 }}>
                                My Chicken and More
                                <br />
                                - {store.name}
                              </Typography>

                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontWeight: 800,
                                    color: '#ffb400',
                                    bgcolor: 'rgba(255, 180, 0, 0.1)',
                                    px: 0.8,
                                    py: 0.2,
                                    borderRadius: '4px'
                                  }}
                                >
                                  {store.rating}
                                </Typography>
                                <Typography sx={{ color: '#ffb400', fontSize: '0.9rem', letterSpacing: '1px' }}>
                                  {store.stars}
                                </Typography>
                              </Box>
                            </Box>

                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 2 }}>
                              Chicken & Mutton Shop
                            </Typography>

                            <Box sx={{ mt: 'auto' }}>
                              <Button
                                variant="contained"
                                fullWidth
                                disableElevation
                                component="a"
                                href={[
                                  'https://share.google/ZES5JffNIpNPsRGsc',
                                  'https://share.google/exKnj98vmRcnN2ZVA',
                                  'https://share.google/WJdgIfdPlKvESATfV',
                                  'https://share.google/ycC7P1ty0dWSFaMAm'
                                ][index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  bgcolor: '#000000',
                                  color: 'white',
                                  borderRadius: '12px',
                                  textTransform: 'none',
                                  fontWeight: 700,
                                  '&:hover': { bgcolor: '#333333' }
                                }}
                              >
                                Get Location
                              </Button>
                            </Box>
                          </Box>
                        </>
                      )}
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          {/* How to Redeem Section */}
          <Box id="how-to-redeem" sx={{ width: '100%', mt: 8, mb: 12 }}>
            <Typography
              variant="h4"
              component={motion.h4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              sx={{ fontWeight: 800, mb: 6, color: 'text.primary', textAlign: 'center', fontFamily: 'var(--font-figtree), sans-serif' }}
            >
              How to Redeem
            </Typography>

            <Box
              component={motion.div}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                gap: { xs: 6, md: 0 },
                position: 'relative',
                width: '100%',
                px: { md: 2 }
              }}
            >
              {/* Connecting Line (Desktop) */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '24px',
                  left: '12.5%',
                  right: '12.5%',
                  height: '2px',
                  bgcolor: 'divider',
                  zIndex: 0
                }}
              />

              {[
                {
                  title: 'Visit Branch',
                  desc: 'Offer valid exclusively at selected Bhuvaneshwari Nagar, T Dasarahalli, Budigere cross & Gunjur stores only.'
                },
                {
                  title: 'Apply Code',
                  desc: 'Use code HOTDROP to avail the offer, valid only once per phone number (one-time use across all SKUs).'
                },
                {
                  title: 'Stock Up',
                  desc: 'You can purchase up to a maximum of 1 kg per SKU under this offer during redemption.'
                },
                {
                  title: 'Limited Time',
                  desc: 'Valid from 24th to 30th April, make sure to redeem within this limited period.'
                }
              ].map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 1,
                    textAlign: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: '#ef7e22',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      mb: 2,
                      boxShadow: '0 8px 16px rgba(239, 126, 34, 0.2)'
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: 240,
                      px: 2,
                      '& strong': { color: 'text.primary', fontWeight: 800 }
                    }}
                  >
                    {step.desc.split('**').map((part, i) => (
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Fade>

      {/* Footer Section */}
      <Box
        component="footer"
        sx={{
          width: '100%',
          backgroundColor: '#000000',
          borderTop: '1px solid rgba(156, 243, 91, 0.1)',
          py: { xs: '40px', md: '50px' },
          px: { xs: '20px', md: '40px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 4, md: 5 },
          mt: 'auto',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* 1st: Logo */}
        <Box
          component="a"
          href="https://www.mychickenandmore.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}
        >
          <Box
            component="img"
            src={logoImg.src}
            alt="My Chicken and More Logo"
            sx={{
              height: { xs: '36px', md: '56px' },
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* 2nd: Promo Text */}
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: 'center'
          }}
        >
          Visit the Store to Redeem
          <br />
          with Code:{' '}
          <Box
            component="span"
            sx={{
              color: '#d32f2f',
              fontWeight: 900,
              ml: 1
            }}
          >
            HOTDROP
          </Box>
        </Typography>

        {/* 3rd: Social Icons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            '& a': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              bgcolor: '#ffffff',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0,0,0,0.05)',
              '&:hover': {
                bgcolor: '#f0f0f0',
                transform: 'translateY(-2px)'
              }
            },
            '& svg': {
              width: '18px',
              height: '18px',
              fill: '#000000'
            }
          }}
        >
          <a href="https://www.facebook.com/mychickenandmore/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 8 14"><path d="M 5.294 14 L 5.294 7.876 L 7.474 7.876 L 7.887 5.345 L 5.294 5.345 L 5.294 3.698 C 5.294 3.007 5.658 2.329 6.819 2.329 L 8 2.329 L 8 0.171 C 8 0.171 6.927 0 5.909 0 C 3.774 0 2.376 1.213 2.376 3.408 L 2.376 5.34 L 0 5.34 L 0 7.872 L 2.376 7.872 L 2.376 13.995 L 5.299 13.995 Z"></path></svg>
          </a>
          <a href="https://www.instagram.com/mychickenandmore/?hl=en" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14"><path d="M 10.709 2.502 C 10.254 2.502 9.889 2.868 9.889 3.322 C 9.889 3.777 10.254 4.143 10.709 4.143 C 11.163 4.143 11.529 3.777 11.529 3.322 C 11.529 2.868 11.163 2.502 10.709 2.502 Z M 7.057 3.552 C 5.156 3.552 3.61 5.099 3.61 7 C 3.61 8.901 5.156 10.448 7.057 10.448 C 8.959 10.448 10.505 8.901 10.505 7 C 10.505 5.099 8.959 3.552 7.057 3.552 Z M 7.057 9.21 C 5.84 9.21 4.848 8.217 4.848 7 C 4.848 5.783 5.84 4.79 7.057 4.79 C 8.275 4.79 9.267 5.783 9.267 7 C 9.267 8.217 8.275 9.21 7.057 9.21 Z M 9.795 14 L 4.205 14 C 1.886 14 0 12.114 0 9.795 L 0 4.205 C 0 1.886 1.886 0 4.205 0 L 9.795 0 C 12.114 0 14 1.886 14 4.205 L 14 9.795 C 14 12.114 12.114 14 9.795 14 Z M 4.205 1.316 C 2.612 1.316 1.316 2.612 1.316 4.205 L 1.316 9.795 C 1.316 11.388 2.612 12.684 4.205 12.684 L 9.795 12.684 C 11.388 12.684 12.684 11.388 12.684 9.795 L 12.684 4.205 C 12.684 2.612 11.388 1.316 9.795 1.316 Z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/company/my_chicken_and_more/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14"><path d="M 0.234 4.648 L 3.142 4.648 L 3.142 14 L 0.234 14 Z M 1.688 0 C 2.617 0 3.369 0.753 3.369 1.684 C 3.369 2.615 2.617 3.369 1.688 3.369 C 0.759 3.369 0 2.615 0 1.684 C 0 0.753 0.752 0 1.688 0 M 4.957 4.648 L 7.738 4.648 L 7.738 5.927 L 7.773 5.927 C 8.163 5.188 9.106 4.413 10.518 4.413 C 13.454 4.413 14 6.346 14 8.869 L 14 14 L 11.099 14 L 11.099 9.452 C 11.099 8.364 11.078 6.972 9.589 6.972 C 8.099 6.972 7.851 8.151 7.851 9.374 L 7.851 14 L 4.95 14 L 4.95 4.648 Z"></path></svg>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=7996733733" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 15 15"><path d="M 0 15 L 1.076 10.988 C 0.465 9.89 0.147 8.659 0.147 7.409 C 0.147 3.323 3.478 0 7.573 0 C 11.669 0 15 3.323 15 7.409 C 15 11.494 11.669 14.817 7.573 14.817 C 6.345 14.817 5.128 14.506 4.04 13.921 Z M 4.242 12.415 L 4.499 12.567 C 5.429 13.12 6.491 13.413 7.573 13.415 C 10.892 13.415 13.594 10.72 13.594 7.409 C 13.594 4.098 10.892 1.402 7.573 1.402 C 4.254 1.402 1.553 4.098 1.553 7.409 C 1.553 8.5 1.858 9.579 2.433 10.524 L 2.592 10.78 L 1.993 13.018 L 4.248 12.415 Z M 10.459 8.518 C 10.153 8.335 9.756 8.134 9.395 8.28 C 9.12 8.396 8.943 8.823 8.765 9.042 C 8.674 9.158 8.564 9.17 8.423 9.115 C 7.384 8.701 6.589 8.012 6.021 7.06 C 5.923 6.914 5.941 6.798 6.058 6.658 C 6.229 6.457 6.449 6.225 6.492 5.951 C 6.54 5.676 6.412 5.359 6.296 5.115 C 6.149 4.804 5.99 4.359 5.679 4.182 C 5.391 4.018 5.012 4.109 4.756 4.316 C 4.316 4.676 4.102 5.237 4.108 5.798 C 4.108 5.957 4.126 6.115 4.169 6.268 C 4.261 6.634 4.426 6.981 4.621 7.304 C 4.768 7.548 4.921 7.792 5.092 8.018 C 5.648 8.768 6.339 9.42 7.133 9.914 C 7.531 10.158 7.965 10.371 8.411 10.518 C 8.912 10.682 9.358 10.853 9.896 10.749 C 10.459 10.64 11.015 10.292 11.241 9.749 C 11.308 9.591 11.339 9.408 11.302 9.237 C 11.223 8.884 10.752 8.676 10.465 8.506 Z"></path></svg>
            </a>
        </Box>
      </Box>
    </Box>
  );
}
