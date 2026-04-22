const fs = require('fs');
const file = 'c:\\Users\\pooja\\Downloads\\New folder (4)\\app\\page.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `            <Box
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
            </Box>`;

const newStr = `            <Box
              component="span"
              sx={{
                color: '#e75516',
                fontWeight: 900,
                ml: 1
              }}
            >
              HOTDROP
            </Box>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated HOTDROP styling');
} else {
  console.log('Target string not found');
}
