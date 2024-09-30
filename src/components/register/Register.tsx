import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth/authActions';
import { useAppDispatch } from '../../redux/hooks';
import styles from '../login/login.module.css'
import { useFormik } from "formik";

export interface IRegisterFormValues {
    name: string,
    email: string,
    password: string
}

export default function Register() {

    const dispatch = useAppDispatch()

    //хук для перенаправления маршрутизации
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        } as IRegisterFormValues,
        onSubmit: (values: IRegisterFormValues, { resetForm }) => {

            //в values лежат данные из формы
            dispatch(loginUser(values))
            .then(() => {
                navigate('/')
              resetForm();
            })
        }
    })

    return (
        <div className={styles.loginForm}>
            <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
                <label>Registration</label>
                <input value={formik.values.name} name='name' onChange={formik.handleChange} type="text" placeholder='login' />
                <input value={formik.values.email} name='email' onChange={formik.handleChange} type="email" placeholder='email' />
                <input value={formik.values.password} name='password' onChange={formik.handleChange} type="password" placeholder='password' />
                <button type="submit">register</button>
            </form>
            <span className={styles.formErrors}>{formik.errors.name}</span>
            <span className={styles.formErrors}>{formik.errors.password}</span>

        </div>
    )
}