import { FC, useContext } from 'react';
import { ThemeContext } from '../../../context/theme';
import { LangContext } from '../../../context/lang';
import { CardProps } from '../../../types/index';
// import { Select } from '../../../components/containers/Select';

export const Card: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as CardProps;
    const { lang } = useContext(LangContext);

    const styles = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
    };

    return (
        <div className="card" style={styles} onClick={toggleTheme}>
            <img src="https://picsum.photos/id/100/300/250" alt="Random" />
            <div className="cardBody">
                <h2>{lang}</h2>
                <h2>Lorem ipsum dolor</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h3>
                <a href="#">Go to site</a>
                {/* <Select /> */}
            </div>
        </div>
    );
};
