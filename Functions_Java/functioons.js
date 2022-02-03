package funciones;

import java.util.Scanner;
import java.lang.Math;

public class calculadora {

	public static void main(String[] args) {
		
		Scanner s = new Scanner(System.in);
		System.out.println("Insert number 1: ");
		double n1= s.nextDouble();
		System.out.println("Insert number 2: ");
		double n2= s.nextDouble();
		System.out.println("Choice the operacion (1->add 2->rest 3->multiply 4->div 5->Square Root 6->pow): ");
		int choice1= s.nextInt();
		s.close();
		
		operaciones(n1,n2, choice1);
	
		
	
	}
	
	static void operaciones(double a,double b, int c) {
		
		switch(c) {
		case 1:
			double sum=a+b;
			System.out.println("Addition: " + sum);
			break;
		case 2:
			double sub=a-b;
			System.out.println("Subtraction: " + sub);
			break;
		case 3:
			double multi=a*b;
			System.out.println("Multiplication: " + multi);
			break;
		case 4:
			double div=a/b;
			System.out.println("Division: " + div);
			break;
	
		default:
			System.out.println("Invalid Option");
	}
		
		
	}
}