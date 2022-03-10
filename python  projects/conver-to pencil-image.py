import imghdr
from typing import final
import numpy  as np
import imageio
import scipy.ndimage
import cv2
img="file:///home/admin123/Downloads/im"



def rgb2gray(rgb):
    return np.dot(rgb[...,:3],[0.2989,0.5870,0.1140])
    
    #its 2-dimenshional arey formula to cinvert image to gray scale
def dodge(front,back):
    final_sketch=front*255/(255-back)
    #if imge greatr then 255 which 255
    final_sketch[back==255]==255
    return final_sketch.astype("uint8")

ss=imageio.imread(img) #to read given image
gray=rgb2gray(ss)
i=255-gray # 0,0,0, grakest color and 255,255,255 is the brightest colour 


blur=scipy.ndimage.filters.gaussian_filter(i,sigma=15)
#sigma is the intensity of  blurness of image
r=dodge(blur,gray)
cv2.imwrite("bhagya-pencil.png",r)
