const fs = require('fs');
const file = 'c:\\Users\\pooja\\Downloads\\New folder (4)\\app\\page.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `        {/* Left Side: Promo Text */}
        <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
          <Typography
            sx={{
              color: '#1d1a40',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            Visit the Store to Redeem
            <br />
            with Code:{' '}
            <Box
              component="span"
              sx={{
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
                backgroundSize: '600%',
                animation: 'anime 5.5s linear infinite',
                color: '#ffffff',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 550,
                border: 'none',
                boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                textDecoration: 'none',

                width: { xs: '145px', md: '300px' },
                height: { xs: '42px', md: '52.8px' },
                fontSize: { xs: '13px', md: '18px' },
                borderRadius: '15px',
                textTransform: 'none',
                justifyContent: { xs: 'flex-start', md: 'center' },
                gap: { xs: 0, md: '8px' },
                px: { xs: 1, md: 3 },
                textAlign: 'left',

                '&:hover': {
                  background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)',
                  '&::after': { opacity: 0.4 }
                },
                '&:focus': {
                  background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)'
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '10px',
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
                  backgroundSize: '600%',
                  filter: 'blur(20px)',
                  opacity: 0.8,
                  zIndex: -1,
                  animation: 'anime 5.5s linear infinite',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              HOTDROP
            </Box>
          </Typography>
        </Box>

        {/* Right Side: Logo and Social Icons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, gap: 2, width: { xs: '100%', md: 'auto' } }}>
          {/* Footer Logo */}
          <Box
            component="a"
            href="https://www.mychickenandmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', mb: 1, textDecoration: 'none' }}
          >
            <Box
              component="img"
              src={logoImg.src}
              alt="My Chicken and More Logo"
              sx={{
                height: { xs: '28px', md: '36px' },
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Box>
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
                bgcolor: 'rgb(36, 36, 36)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgb(50, 50, 50)',
                  transform: 'translateY(-2px)'
                }
              },
              '& svg': {
                width: '18px',
                height: '18px',
                fill: 'white'
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
        </Box>`;

const newStr = `        {/* 1st: Logo */}
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
            color: '#1d1a40',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 800,
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
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
              backgroundSize: '600%',
              animation: 'anime 5.5s linear infinite',
              color: '#ffffff',
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 550,
              border: 'none',
              boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none',

              width: { xs: '145px', md: '300px' },
              height: { xs: '42px', md: '52.8px' },
              fontSize: { xs: '13px', md: '18px' },
              borderRadius: '15px',
              textTransform: 'none',
              justifyContent: { xs: 'flex-start', md: 'center' },
              gap: { xs: 0, md: '8px' },
              px: { xs: 1, md: 3 },
              textAlign: 'left',
              ml: { xs: 0, sm: 1 },

              '&:hover': {
                background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)',
                '&::after': { opacity: 0.4 }
              },
              '&:focus': {
                background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '10px',
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
                backgroundSize: '600%',
                filter: 'blur(20px)',
                opacity: 0.8,
                zIndex: -1,
                animation: 'anime 5.5s linear infinite',
                borderRadius: '15px',
                transition: 'all 0.3s ease'
              }
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
        </Box>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated footer structure');
} else {
  console.log('Target string not found');
}
