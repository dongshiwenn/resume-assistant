import styles from './index.module.scss';

const Login = () => {
    return(
        <div className={styles.login}>
            <div className={styles.loginText}>登录</div>
            <div className={styles.loginBox}>
                <div className={styles.scanCode}>
                    <div className={styles.code}/>
                    <p className={styles.codeText}>请打开手机微信扫描二维码进行确认</p>
                </div>
                <p className={styles.agreeText}>登录即代表您同意《服务协议》《用户隐私条款》</p>
            </div>
        </div>
    )
}
export default Login;