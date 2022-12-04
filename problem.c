#include<stdio.h>
int main(){
    int x, vag;
    scanf("%d",&x);
    vag = x/5;
    switch (vag){
        case 19:
            printf("A+");
            break;
        case 18:
            printf("A+");
            break;
        case 17:
            printf("A");
            break;
        case 16:
            printf("A-");
            break;
        case 15:
            printf("B+");
            break;
        case 14:
            printf("B");
            break;
        default:
            printf("F");
            break;
    }
}