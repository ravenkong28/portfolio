document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('descriptionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalImage = document.getElementById('modalImage');
    const description = document.getElementById('projectDescription');
    const modalTools = document.getElementById('modalTools');
    const modalLanguages = document.getElementById('modalLanguages');
    const modalLibraries = document.getElementById('modalLibraries');
    const modalDocumentations = document.getElementById('modalDocumentations');
    const closeBtn = document.querySelector('.close-btn');

    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    const getLogoUrl = (name, type) => {
        const logos = {
            tools: {
                "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
                "Dev C++": "https://images.sftcdn.net/images/t_app-icon-m/p/4095d654-96d0-11e6-87f8-00163ed833e7/1965154745/bloodshed-dev-c-icon.jpg",
                "Excel": "https://img.icons8.com/?size=100&id=117561&format=png&color=000000",
                "Github": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                "Google BigQuery": "https://cdn.simpleicons.org/googlebigquery",
                "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
                "Google Colab": "https://cdn.simpleicons.org/googlecolab",
                "Google Looker Studio": "https://cdn.simpleicons.org/looker",
                "Hadoop": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
                "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
                "Kaggle": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
                "Laravel": "https://cdn.simpleicons.org/laravel",
                "Medium": "https://cdn.simpleicons.org/medium",
                "MySQL": "https://cdn.simpleicons.org/mysql",
                "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
                "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                "Power BI": "https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000",
                "R Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg",
                "RapidMiner2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSUlEQVR4AWIgBYyCX25iTABa6wFWkiiIwnDWtm3btm2b0drRIljbtm3btnefbRv1/iSDTqfHM0m+sCp1WnUbJVAB5RUqoBgyuTpAX/yAp4oX3qOlK4dnxRmIGRtdGaAKPCBmvEcRVwWYiDSIhjSkIw49XDE8By5BNCRiO75DsAOZnB2gOUJMXPlW5MYWCNxQxdkB1kE0HEMhXU0/JEIw15nDq8MNonIdpRR1pfAdgnco7qwAKyAqz1BFVZcJuyBIxXRnDK+lcfVf0MBE/WAkQfAOpRwZngWbIQpuaGumpyx+Q5CORY4E6IhQiI4/+lpxVhyA6Lijnj3DC+E2RCccY63sHYEUiM4R5LRleCYsRioEcZiJzFb2V8B/iE48JtgSoDMCIUjCMmS38d05ClH4iwbWNFfEawjSsAW57XiEY5GqsTeKmmsqgBNaW86OAJXhobG2NyKHqcNmlSL1NZR08N/hFEQlAXOQWV08H/EQ/EFDJyyxSSaO7wiMRyZ94QCEQ3Si8RL7MROdUAG57DhDvCEafNFQXzgScRAT4uCOe9iECWiOEshmJkA2nIdoCENzfWF+XIZYKQ2R+IFLWIHBqIOCyKwIMR3pEJU9yKa9du2TgiC8w1HMRxf00fiR8UBdreWxFeJECfBHEkQnHUtMPbOa+AdRSUIo3PABj3AdF3AOF3EDj/EJHghHMkTlNUqae3On4g9eYA9mohfqoywKIheyIYtCduRGIZRHI/TDPBzEW3zHAGsWSElkjBeUT6nVnYM6XAxbhTYKACmvbmMmxkvNAAAAAElFTkSuQmCC",
                "RapidMiner": "https://cdn-1.webcatalog.io/catalog/rapidminer/rapidminer-icon-filled-256.webp?v=1714775620341",
                "Spring Boot": "https://cdn.simpleicons.org/spring",
                "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
                "SQLite": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjajxsv9yFWZayqrADOgKocUa2hKq477ExtA&s",
                "Tableau": "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000",
                "VSCode": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
                "XAMPP": "https://cdn.simpleicons.org/xampp",
                "Google Sheet": "https://img.icons8.com/?size=100&id=30461&format=png&color=000000",
                "Microsoft Excel": "https://img.icons8.com/?size=100&id=117561&format=png&color=000000",
                "Microsoft Office": "https://img.icons8.com/?size=100&id=6kZdxe7t8OL1&format=png&color=000000"
            },
            libraries: {
                "CatBoost": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEVHcEz/zAD/ygD/zQD/xQD/0QD/zgD/zAD/zAD/zAD/zAD/AQD/ywD/////1AH/xQD/3gD/7LD/4Yj//vT/11L/+N3/Kwv/zi//rgD/hgD/3HD/oQD/YwD/yxX/7Jj/uwD/hmMiK98LAAAACnRSTlMAzKiM+iVV93ZxtFoLnwAAARBJREFUKJF9kumywiAMhb06XYSQsHS3Vd//KQ2UCu3tePgVvkkgJ7lcfqk+0X2D4kRQRFid0b9TCHy8yj0kIL7XqH1QVTu4tKrtBXayC6lQZ5BapVSrOyllhyG3SBCUVy+9KNxcNwhAjpnDADn0tFgh9LZpnHITDsweje0htuMhP9gskyHQ8wANl/CVofQQei5pgcwCWmqYOAqvViGTjHKWyDSCZk3WKbP+6RY+xAYYS5PBcQDL1VcGt80Eej5H7nJ8xixmVbIP36GPN35tLhMEKTMLUishcYjwgdlMt8wjvOYjwwgjy41n+ArsFWG9GzagGOdRIGzuHNYEtc7aOEBYZyXSgokTfVfz/l9pqX/pA+1PHUkBv+uRAAAAAElFTkSuQmCC",
                "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                "Flask": "https://cdn.simpleicons.org/Flask",
                "Keras": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1024px-Keras_logo.svg.png",
                "LightGBM": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABw0lEQVR4AcXSAURDURiG4ePKJEmIaiWTqSQhCQEqFCQkJEkCIZk1JIRAkiTRAIFAyDbDJBmGZJEGhADJYmauNda7OEA7x/K7/TwA3u9cV9W7/OzAIpICTtGuGr3PucEwqn9F1MUBmhXn6QCiGYzaK8IDiBawDUdxng4gmkBAmU9+ANF3rECZT3gAwZpLdKg6F45NqZ349BJWRAcQfcWsMhxRP64jiZlqJDEdEhlAtIJjtBrCNRvI1+JiA4hmMWF5dT9SOiwygGgJu/AZwk0IoaijIgOI3mHA8uoRZHRMbABhPxxD2Id9uDpkHCB9hPuwiSge4Ho2wPBFxrCBc2RQ8myA4eccRVA1ev6LlwCCcP5lfc9FLtwTzVUZkMctjrCMITieDfgNAwq4xwlW0evpAI1wGYdoUXXuK9bpoFd8ANEsxpXhCA8jXYl1hsQGEHWxB58h7MM+3Eq8qyo2gGgaw5ZXT+L5JwyRAUQL2IJjCLfhDBUdFhlANImA5dXzeNNBkQFE17EGU7gLV9AxuQHdR0+mcM06PnREfIAhHkTKEpUfQLQJERQtQfkBRMfwaAnJDyDagkOULRH5AUTbcYIbAQv1Ot+oROl5QRDzEQAAAABJRU5ErkJggg==",
                "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
                "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
                "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
                "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
                "Plotly": "https://cdn.simpleicons.org/plotly",
                "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                "SciPy": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnfhZwoeVtV8kGJjOCAyuBBLEWWpC7OFiqQ&s",
                "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
                "Seaborn": "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg",
                "SHAP": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFa0lEQVR4Ab3XA5gkVxSG4e/cqsZ4ljOr2LZt27Zt27Zt27aTtc3hatCquvdEw+48m1Hytrv0n1Pm3wzt/SBDyx6O/hq/b4XfCu4fMnqbl2Qm51PR69pd5nhXzpxjrmioKLzmnMTnw6Rmi0foLMMijFn3efI37OdrfXg2af1QU/pG5rcFmw/+ZH2jaXcIVgfjKNCMO7TuuM/6F08ZGU/GTz4qaU68M1l46vap3W41qbWvYFF8FiGoTRLUJAcS6FEoi2F1MU3Zoyvurf8JpYhmqr2ckzxXz6Zk3D048kjZ3fWXip3JhKO73AENFbUaVcijmVIaJPAApS0BrFsKbRrXMZCMXY5ESIcDvLXEy7y91Mv+62XP931zsRejVoUmSiulYwRVH3Vo2YG+5u3TR0v2jys7oxudkRvgnRVewy+KFIeN9lq1+rlLuftmFZaWGVTpMtH4FpkIC4NLSNnPSIQPU957McZVoSc/1D5AWJchbAg2VOtOQVlFrR6pjeEunsHSZWIZlliDwJ2GshqhO4RUsAvzqnM7oFb/fJUCsZZhqr0xInSUSF3LKhIaiXqVBG4xnBa3rDxHITTmBkCaRukiCa2RAv9NIvIYwlCi5pbM2qv+gopPDskN0F2iKtVeecXQ5VY+beSSy+46fpllbyz48M0AEHL1fICIDfXWHfYpe2mFLW56Zs3tn3xqxW1O8TOveAgZBNe+eO1mACNksQUaBl5jeg91epKobu2sXnLWUZPXxgSjMTKjaboERqZDabcCSLBMWUY8fmupzJOhsdJEjTjt1ablxX46s9hmGz0+npg5FuNuJiLH07fgLYaUIfce1/UOpOdZFynwbo947uiIsaf7cTnnmuhWKUHJIhvIVK7c9KJfb9nwjOev3/jcT2XCw8nDd3uo0x0QWmlxQ6Osed6FDVudftaIrc4466dNzzu3YtKQQWRTcGskqktK6+Y97Ifh5/nJhrfv3fqLtdb67Ws+u3ncPwYQsvj5Xr0I1TTzZOKQNyszS06vPqIgkfooP5n+uF/Fgssa31xRyGbE1adlLXW6C1CiTtd2Vreom5PM7YDxDcaXGYjMbYqSEE+mDB0d1ErMXGiMvmh87vLi5p5V3j3Ft053UegDFFrHPnWXzxuA4sjilD4oMVr5NnS5AWL94sTK83/2PE7xnD7kGc70C/z3qzddks1vPPKTvU/e65w9T9/n6uf7rTx1xZ9qTdapPOasRoV/pB26Htjht92I3m5DVyzvywI7xhSaOb2nh4lNlnGenRGcNLW4+CQjLHjwgNUvONNv+HYO3ZIbYOA9IZEY/SsW6l0Zla0jDTqUgf4Jv1SmMoHjVIVlrULacszU4tjPkFZ6gKFJXQCNIeuHjj2AvqGybSLUHQSNKOTTRKF0oTMePd0Bp6BKftv/FApEJOeCROg55l83GOW/0rHjAEJ3SWcCuKyaHUq3iJAELK1UjOQGyPMg5jHaCBMBjFARNfwSajcqV0zUZ6QYGd0UplYMI4vK4rkB+sVhrRLGxg0H+cLJMWG//Tb3v3Lg0SFCVqWBQVPD431nGF8OQzhVfDkgryTySVF5nK3OXaH9XjDuhAjjQIFhf75C4J1rG0A6uFKd4nl8LyGTVRkswlfRmPnF6xPltHe2HgWM6vQVUcwX8nxZYGB684I9YfRSJsxk5/Cs825Yb6XvjJFdEHb0fDly3IiGqiFLxbt+a1YcgV8n2NqScnNW4DjYE6ryPB6rrwuzN1ZrBLf97Bpue3nlccA4mrz8Cz3rkGtrUVU2PbXyivVPrAz/eOnGp1S+tP+VNfl7X1bD/2KTUyvZ9uyqPhueXHnmBidVXr7lGVXLLnXAbJ77pIHO+h2feGdLLBz1xAAAAABJRU5ErkJggg==",
                "Spark": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
                "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            },
            languages: {
                "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "PHP": "https://cdn.simpleicons.org/php",
                "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                "R": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
                "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
            },
        };

        for (let category in logos) {
            if (logos[category][name]) {
                return logos[category][name];
            }
        }
        return '';
    };

    document.querySelectorAll('.skill').forEach(skill => {
        const name = skill.dataset.name;
        const type = skill.dataset.type;
        const logoUrl = getLogoUrl(name, type);
        const imgElement = skill.querySelector('.skill-logo');

        if (logoUrl) {
            imgElement.src = logoUrl;
        } else {
            console.warn(`Logo not found for: ${name} in category: ${type}`);
        }
    });



    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            modalTitle.textContent = button.getAttribute('data-title');
            modalDate.textContent = button.getAttribute('data-date');
            modalImage.src = button.getAttribute('data-image');

            // Properly format and set the project description
            description.innerHTML = `<p>${button.getAttribute('data-description')}</p>`;

            // Clear previous dynamic elements
            document.querySelectorAll('.modal-dynamic').forEach(el => el.remove());

            // Populate tools if available
            const tools = button.hasAttribute('data-tools') ? button.getAttribute('data-tools').trim() : '';
            if (tools) {
                const toolsHeader = document.createElement('h5');
                toolsHeader.classList.add('modal-dynamic');
                toolsHeader.style.textAlign = 'center';
                toolsHeader.textContent = 'Tools';
                modalTools.parentNode.insertBefore(toolsHeader, modalTools);

                const toolList = tools.split(',').map(tool => tool.trim());
                modalTools.innerHTML = toolList.map(tool => {
                    const logoUrl = getLogoUrl(tool, 'tools');
                    return `<span class="tool"><img src="${logoUrl}" alt="${tool} Logo">${tool}</span>`;
                }).join('');
            } else {
                modalTools.innerHTML = ''; // Clear if no tools provided
            }

            // Populate programming languages if available
            const languages = button.hasAttribute('data-languages') ? button.getAttribute('data-languages').trim() : '';
            if (languages) {
                const languagesHeader = document.createElement('h5');
                languagesHeader.classList.add('modal-dynamic');
                languagesHeader.style.textAlign = 'center';
                languagesHeader.textContent = 'Programming Languages';
                modalLanguages.parentNode.insertBefore(languagesHeader, modalLanguages);

                const languageList = languages.split(',').map(language => language.trim());
                modalLanguages.innerHTML = languageList.map(language => {
                    const logoUrl = getLogoUrl(language, 'languages');
                    return `<span class="language"><img src="${logoUrl}" alt="${language} Logo">${language}</span>`;
                }).join('');
            } else {
                modalLanguages.innerHTML = ''; // Clear if no languages provided
            }

            // Populate libraries if available
            const libraries = button.hasAttribute('data-libraries') ? button.getAttribute('data-libraries').trim() : '';
            if (libraries) {
                const librariesHeader = document.createElement('h5');
                librariesHeader.classList.add('modal-dynamic');
                librariesHeader.style.textAlign = 'center';
                librariesHeader.textContent = 'Libraries';
                modalLibraries.parentNode.insertBefore(librariesHeader, modalLibraries);

                const libraryList = libraries.split(',').map(library => library.trim());
                modalLibraries.innerHTML = libraryList.map(library => {
                    const logoUrl = getLogoUrl(library, 'libraries');
                    return `<span class="library"><img src="${logoUrl}" alt="${library} Logo">${library}</span>`;
                }).join('');
            } else {
                modalLibraries.innerHTML = ''; // Clear if no libraries provided
            }

            // Populate documentation buttons if available
            const links = button.getAttribute('data-link')?.split(',');
            const buttons = button.getAttribute('data-buttons')?.split(',');
            if (links && buttons) {
                modalDocumentations.innerHTML = links.map((link, index) => `<li><a target="_blank" href="${link}" class="button primary small">${buttons[index]}</a></li>`).join('');
            } else {
                modalDocumentations.innerHTML = ''; // Clear if no documentation links provided
            }

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

