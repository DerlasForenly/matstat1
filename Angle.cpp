#include "Angle.h"

Exception::Exception(string errMsg) {
    this->errMsg = errMsg;
}

string Exception::getErrMsg() {
    return errMsg;
}


double Angle::tan() {
    /* Функції синуса та косинуса приймають кут в радіанах,
    тому потрібно спочатку перевести кут в радіани */
    double pi = 3.1415926535;
    double rad = a * pi / 180.0;

    /* Виконую округлення, бо число яке буде обраховане буде близьке
    до 0, але не 0. Якщо округлене число 0, то викликаємо виключення.
    Якщо викликається виключення, то виконання цієї функції завершується,
    і переходить до блоків catch в функції main */
    if (floor(cos(rad) * 10000000) / 10000000 == 0) {
        throw Exception("sin(a) cannot be divided by 0");
    }

    /* Інакше обраховую, округлюю і повертаю */ 
    double result = floor((sin(rad) / cos(rad)) * 100000) / 100000;
    return result;
}

Angle::Angle(double a) {
    this->a = a;
}