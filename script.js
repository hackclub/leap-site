function showtechicaldetails(){
  document.getElementById("mainheader").style.display ="none"
  document.getElementById("subheader").innerHTML ='<a href="/" style="text-decoration: none;font-size: 24px">◄</a> Technical details'
  document.getElementById("subheader").style.marginBottom ='14px'
  document.getElementById("subheader").style.fontSize ='24px'
  document.getElementById("text").innerHTML ='The board features: a ATmega32u4, a 5V micro-USB power connection, 20 I/O pins, 7 PWM Channels, 12 Analog Inputs, 32 KB Flash Memory (of which 4 KB used for bootloader), 2.5 KB SRAM, 1 KB EEPROM, 5V Logic, 7-12V input range through the VIN pin, 40 mA output per I/O pin, built-in USB Support (no need for programmer) and can act as USB device (keyboard, mouse, game controller, etc). All SMD components are soldered on. The board is also open source <a href="https://github.com/kevin200617/Orpheus-Leap-Micro">here</a>'
  document.getElementById("get-button").style.display ="none"
  document.getElementById("tech-button").style.display ="none"
}
