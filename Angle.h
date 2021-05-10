#include <math.h>
#include <string>
using namespace std;

/* Клас виключення, приймає в конструктор текст повідомлення про помилку */
class Exception {
    string errMsg;
    public:
    Exception(string errMsg);
    string getErrMsg();
};

/* Клас для збереження градусної міри кута */
class Angle {
public:
    double a; // кут в градусах
    Angle(double a); // конструктор приймає кут в градусах
    double tan(); // обрахунок тангенса
};
