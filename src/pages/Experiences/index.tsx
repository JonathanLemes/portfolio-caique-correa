import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImgSobre from '../../assets/img/Sobre.png';
import ImgHome from '../../assets/img/Home.png';
import ImgBlackFex from '../../assets/img/BlackFex.png';
import ReactLoading from 'react-loading';
import { apiFirebase } from '../../services/api';
import './index.css';

interface Experience {
    categoria: string,
    dataFim: string,
    dataInicio: string,
    descricao: string,
    instituicao: string,
    nome: string,
    ordem: number,
    modalidade: string,
    local: string,
}

export default function Experiences() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [currentCategory, setCurrentCategory] = useState<string>();
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);

    const getExperiencesArray = async () => {
        const result = await apiFirebase.getExperiences();

        if (result.success && result.res) {
            const experiences: Experience[] = result.res.map((experience: any) => {
                return experience.data();
            });
            
            sortExperiences(experiences);
        }
    }

    const sortExperiences = (experiences: Experience[]) => {
        const sortedExperiences: Experience[] = experiences.sort((a, b) => {
            return a.categoria.localeCompare(b.categoria);
        });

        setExperiences(sortedExperiences);
        console.log(sortedExperiences);
        
        setCurrentCategory(sortedExperiences[0].categoria);

        const experiencesCategories: string[] = experiences.map((experience) => {
            return experience.categoria;
        })

        const categories = Array.from(new Set(experiencesCategories));

        setCategories(categories);
        console.log(categories);
    }

    const handleCategorySwitch = (isNext: boolean) => {
        if (isNext && (currentCategoryIndex + 1) <= (categories.length - 1)) {
            setCurrentCategoryIndex(currentCategoryIndex + 1);
            setCurrentCategory(categories[currentCategoryIndex + 1]);
        } else if (isNext) {
            setCurrentCategoryIndex(0);
            setCurrentCategory(categories[0]);
        } else if (!isNext && (currentCategoryIndex - 1) >= 0) {
            setCurrentCategoryIndex(currentCategoryIndex - 1);
            setCurrentCategory(categories[currentCategoryIndex - 1]);
        } else {
            setCurrentCategoryIndex(categories.length - 1);
            setCurrentCategory(categories[categories.length - 1]);
        }
    }

    useEffect(() => {
        getExperiencesArray();
        // eslint-disable-next-line
    }, []);

    if (experiences.length === 0 || categories.length === 0 || !currentCategory) {
        return (
            <div className="page-experiences">
                <img src={ImgBlackFex} alt="Feito por: BlackFex" className="blackfex-logo" />
                <div className="content-block">
                    <div className="experiences-block">
                        <Link to="/sobre" className="btn experiencias"><img src={ImgSobre} alt="Sobre" /></Link>
                    </div>
                    <div className="loading-block">
                        <ReactLoading className="loading" type={"spin"} color="#A60A0A" />
                    </div>
                    <div className="experiences-block">
                        <Link to="/" className="btn home"><img src={ImgHome} alt="Home" /></Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-experiences">
            <img src={ImgBlackFex} alt="Feito por: BlackFex" className="blackfex-logo" />
            <div className="menu">
                <button className="arrow" onClick={() => handleCategorySwitch(false)}>{'<'}</button>
                <button className="category">{currentCategory?.toUpperCase()}</button>
                <button className="arrow" onClick={() => handleCategorySwitch(true)}>{'>'}</button>
            </div>
            <div className="content-block">
                <div className="experiences-block">
                    <Link to="/sobre" className="btn experiencias"><img src={ImgSobre} alt="Sobre" /></Link>
                </div>
                <div className="experiences-block">
                    {experiences.map((experience, index) => {
                        if (experience.categoria === currentCategory && index % 2 === 0) {
                            if (experience.categoria.toUpperCase() === 'CURSOS') {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{`Instituição: ${experience.instituicao}`}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            } else if (experience.categoria.toUpperCase() === 'PUBLICAÇÕES') {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{`Modalidade: ${experience.modalidade}
                                        Local: ${experience.local}`}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{experience.descricao}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            }
                        }
                        return null;
                    })}
                </div>
                <div className="experiences-block">
                {experiences.map((experience, index) => {
                        if (experience.categoria === currentCategory && index % 2 !== 0) {
                            if (experience.categoria.toUpperCase() === 'CURSOS') {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{`Instituição: ${experience.instituicao}`}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            } else if (experience.categoria.toUpperCase() === 'PUBLICAÇÕES') {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{`Modalidade: ${experience.modalidade}
                                        Local: ${experience.local}`}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="experiences-card" key={index}>
                                        <h1>{experience.nome.toUpperCase()}</h1>
                                        <p>{experience.descricao}</p>
                                        <h2>{experience.dataInicio} - {experience.dataFim}</h2>
                                    </div>
                                );
                            }
                        }
                        return null;
                    })}
                </div>
                <div className="experiences-block">
                    <Link to="/" className="btn home"><img src={ImgHome} alt="Home" /></Link>
                </div>
            </div>
        </div>
    );
}