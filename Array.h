#pragma once
#include <iostream>
#include <vector>
using namespace std;

/* Замінив усі ptr на elements адже це більше не вказівники */
template <typename T>
class Array {
	friend ostream &operator<< (ostream &output, const Array<T>& obj) {
		for (int ix = 0; ix < obj.size; ix++)
			output << obj.elements[ix] << endl;
		return output;
	}
	/* замість вказівника тепер вектор, у вектора є своя інддексація */
	vector<T> elements;
	int size;
	int first;
	int last;
public:
	/* Функції ту ж самі, змінював їх зміст частково */ 
	Array();
	Array(int, int, int);
	Array(const Array&);

	int getSize() const;
	const Array &operator= (const Array &);
	T &operator[] (int);
	void fill();
	void sort();
	bool is_empty();
	bool in_range(int);
};

template <typename T>
Array<T>::Array() {
	/* Тепер не треба робити пустим вказівник */
	size = 0;
	first = 0;
	last = 0;
}

template <typename T>
Array<T>::Array(int arraySize, int first, int last) {
	size = (arraySize > 0 ? arraySize : 0);
	this->first = first;
	this->last = last;

	/* Замість виділення пам'яті можна змінити його розмір */
	elements.resize(arraySize);
}

template <typename T>
Array<T>::Array(const Array &arrayToCopy) : size(arrayToCopy.size) {
	last = arrayToCopy.last;
	first = arrayToCopy.first;

	/* Замість виділення пам'яті можна змінити його розмір */
	elements.resize(arrayToCopy.size);

	/* Пуш бек добавляє елемент в кінець вектора */
	for (int ix = 0; ix < size; ix++)
		elements.push_back(arrayToCopy.elements[ix]);
}

template <typename T>
int Array<T>::getSize() const {
	return size;
}

template <typename T>
const Array<T> &Array<T>::operator= (const Array &right) {
	last = right.last;
	first = right.first;
	if (&right != this) {
		if (size != right.size) {
			size = right.size;
			elements.resize(right.size);
		}
		for (int ix = 0; ix < size; ix++)
			elements[ix] = right.elements[ix];
	}

	return *this;
}

template <typename T>
T &Array<T>::operator[] (int subscript) {
	if (subscript < first || subscript > last) {
		cout << "out of range" << endl;
		system("pause");
		exit(1);
	}
	return elements[subscript - first];
}

template <typename T>
void Array<T>::fill() {
	for (int i = 0; i < size; i++) 
		cin >> elements[i];
}

template <typename T>
bool Array<T>::is_empty() {
	/* У вектора є своя функція на перевірку чи він пустий */
	return elements.empty();
}

template <typename T>
bool Array<T>::in_range(int index) {
	if (index >= first && index <= last) return true;
	return false;
}

template <typename T>
void Array<T>::sort() {
	for (int i = 0; i < size; i++)
		for (int j = 0; j < size; j++)
			if (elements[i] > elements[j]) {
				T t = elements[i];
				elements[i] = elements[j];
				elements[j] = t;
			}
}