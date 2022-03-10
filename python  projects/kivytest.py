from cProfile import label
import imp
from tkinter import*
from tkinter import font
from turtle import width

from matplotlib.pyplot import text
clk=Tk()
clk.title("clock")
clk.geometry("1350x00+0+0") #width heght ,y-axis
clk.config(bg="#0c1E28")#you can give color u want 
1b_hr=label(clk,text="12",font=("Time 20 bold ",75,"bold"),bg="#087587",fg="white")
1


b_hr.place(x=350,y=200,width=150,height=150)
clk.mainloop()
