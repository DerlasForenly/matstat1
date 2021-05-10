#include <iostream>
#include "Angle.h"
using namespace std;

int main() {
    Angle a1(0.0); // sin(0) = 0, cos(0) = 1, 0/1=0
    Angle a2(90.0); // sin(1) = 1, cos(1) = 0, 1/0=Exception

    double result1 = 0;
    double result2 = 0;

    try {
        /* Слово try дає зрозуміти програмі, що тут можуть бути виключення.
        Якщо таке з'явилось, то одразу переходимо до блоку catch, у якого в дужках
        такий же тип викллючення (оддочасно може бути багато виключень) */
        result1 = a1.tan();
    }
    catch (Exception e) {
        /* Якщо виключення з'явилось, то виводимо помилку і завершуємо програму
        (завершувати не обов'язково) */
        cerr << e.getErrMsg() << endl;
        return 0;
    }
    /* Інакше продовжуємо програму */ 
    cout << result1 << endl;


    try {
        /*Знову пробуємо, і по "сюжету" тут має бути виключення */
        result2 = a2.tan();
    }
    catch (Exception e) {
        /* Якщо виключення з'явилось, то виводимо помилку і завершуємо програму
        (завершувати не обов'язково) */
        cerr << e.getErrMsg() << endl;
        return 0;
    }
    /* Інакше продовжуємо програму */ 
    cout << result2 << endl;
    
    return 0;
}