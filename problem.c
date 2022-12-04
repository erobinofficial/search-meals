#include<stdio.h>
int main(){
    int x = 6;
    int y = 7;
    int temp;
    temp = x;
    x = y;
    y = temp;
    printf("%d %d", x, y);
}