#include "Array.h"

int main() {
	Array<int> a(3, 5, 7);
	Array<int> a2;

	cout << "a is empty: " << a.is_empty() << endl;
	cout << "8 is out of range a: " << !a.in_range(8) << endl;
	cout << "a2 is empty: " << a2.is_empty() << endl;

	cout << "Fill the array:" << endl;
	a.fill();
	cout << "a is empty: " << a.is_empty() << endl;

	cout << "\nSize of a = " << a.getSize() << endl;

	cout << "Content a:" << endl;
	cout << a;
	cout << "a[5] = " << a[5] << endl;
	cout << "a[7] = " << a[7] << endl << endl;

	a2 = a;
	cout << "a2 is empty: " << a2.is_empty() << endl;
	a2.sort();

	cout << "Content a2:" << endl;
	cout << a2;
	cout << "a2[5] = " << a2[5] << endl;
	cout << "a2[7] = " << a2[7] << endl << endl;

	system("pause");
	return 0;
}