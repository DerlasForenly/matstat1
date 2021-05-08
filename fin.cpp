#include <fstream>
#include <string>
#include <iostream>
using namespace std;


class Republic;
class Monarchy;

void loadFromFile() {
    ifstream fin;
    fin.open("data.txt");

    string size_s;
    getline(fin, size_s);

    int size = atoi(size_s);

    for (int i = 0; i < size; i++) {
        string data_line;
        getline(fin, data_line);
        string data[5];
        split(data_line, ", ", data);

        if (data[0] == "republic") {
            Republic* r = new Republic();
            list->add(r);
        }
        else if(data[0] == "monarchy") {
            Monarchy* m = new Monarchy();
            list->add(m);
        }
    }

    fin.close();
}

void split(string s, string delimiter, string mass[5]) {
    size_t pos = 0;
    string token;
    int i = 0;
    while ((pos = s.find(delimiter)) != string::npos) {
        token = s.substr(0, pos);
        mass[i] = token;
        s.erase(0, pos + delimiter.length());
        i++;
    }
    mass[i] = s;
}