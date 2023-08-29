module.exports = {
  PORT: process.env.PORT || '/dev/tty.usbmodem21401',
  BAUDRATE: parseInt(process.env.BAUDRATE, 10) || 115200,
  AUTOOPEN: process.env.AUTOOPEN === 'true' || false,
  AUTOBAUD: parseInt(process.env.AUTOBAUD, 10) || 1
};
