import qrcode
import image
qr=qrcode.QRCode(
    varsion=15,# 15 measthe vershion of qr code high the nmber bigger the code image and complicated picture 
    box_size=10, # size of the box where qr code will be dipalyed
    border=5 # it is white part of imgae ---borderin all 4 sides with color

)

data="https://www.youtube.com/c/CodingTech"
# as i have the path of my chanal  channnl like sheresame way to can give anything
# if u want to redirect and create orml text that write text i quoits

qr.add_data(data)
qr.make(fit=True)
img=qr.make_image(fill="back",back_color="white")
img.save("test.png")