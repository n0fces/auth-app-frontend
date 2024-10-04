// import { Children, createElement, isValidElement } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';

// interface FormSignProps<T extends FormData> {
// 	children: React.ReactNode;
// 	onSubmit: SubmitHandler<T>;
// }

// // ! здесь еще думать и думать над реализацией

// export const FormSign = <T extends FormData>({
// 	children,
// 	onSubmit,
// }: FormSignProps<T>) => {
// 	const methods = useForm<T>();
// 	const { handleSubmit } = methods;

// 	return (
// 		<form className="form" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
// 			{Children.map(children, (child) => {
// 				if (isValidElement(child)) {
// 					return child?.props.name
// 						? createElement(child.type, {
// 								...{
// 									...child.props,
// 									register: methods.register,
// 									key: child.props.name,
// 								},
// 							})
// 						: child;
// 				} else {
// 					return null;
// 				}
// 			})}
// 		</form>
// 	);
// };
