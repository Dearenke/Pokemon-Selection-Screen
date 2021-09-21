import React, { useEffect, useState } from 'react';
import store from 'store';
import actions from 'store/actions/home';
import Pokemon from 'components/Pokemon';
import styles from './index.module.css';

export default function Home() {
    const { home: data } = store.getState();
    const [refresh, setRefresh] = useState(false);
    const [checked, setChecked] = useState(0);

    useEffect(() => {
        store.dispatch(actions.getSquirtle());
        store.dispatch(actions.getCharmander());
        store.dispatch(actions.getBulbasaur());
    }, []);

    useEffect(() => {
        // 订阅
        const unsubscribe = store.subscribe(() => {
            setRefresh(!refresh);
        });
        return () => unsubscribe();
    }, [refresh]);

    useEffect(() => {
        if (!data.squirtle || !data.charmander || !data.bulbasaur) {
            setRefresh(!refresh);
        }
    }, [data.squirtle, data.charmander, data.bulbasaur]);

    return (
        <div className={styles.container}>
            <p className={styles.attachedTop}>Pokemon-Selection-Screen</p>
            <div className={styles.box}>
                <div
                    onClick={() => {
                        setChecked(1);
                    }}
                >
                    {data.squirtle ? <Pokemon data={data.squirtle} checked={checked === 1} style={{ height: 120 }} />
                        : <div className={styles.loadingError}><span>Loading...</span></div>}
                </div>
                <div
                    onClick={() => {
                        setChecked(2);
                    }}
                >
                    {data.charmander ? (
                        <Pokemon
                            data={data.charmander}
                            checked={checked === 2}
                            style={{ height: 120 }}
                        />
                    ) : <div className={styles.loadingError}><span>Loading...</span></div>}
                </div>
                <div
                    onClick={() => {
                        setChecked(3);
                    }}
                >
                    {data.bulbasaur ? <Pokemon data={data.bulbasaur} checked={checked === 3} style={{ height: 120 }} />
                        : <div className={styles.loadingError}><span>Loading...</span></div>}
                </div>
                <div
                    className={styles.randomItem}
                    onClick={() => {
                        setChecked(4);
                    }}
                >
                    {data.random && (
                        <Pokemon
                            data={data.random}
                            checked={checked === 4}
                            style={{ width: '100%', height: 120 }}
                        />
                    )}
                </div>
            </div>
            <div
                className={styles.randomButton}
                onClick={() => {
                    store.dispatch(actions.getRandoms());
                    setChecked(4);
                }}
            >
                <span>Random Selection Pokemon</span>
            </div>
        </div>
    );
}
