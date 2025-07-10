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
                "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                "Flask": "https://cdn.simpleicons.org/Flask",
                "Keras": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1024px-Keras_logo.svg.png",
                "Matplotlib": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png",
                "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
                "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
                "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
                "Plotly": "https://cdn.simpleicons.org/plotly",
                "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                "Seaborn": "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg",
                "SciPy": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnfhZwoeVtV8kGJjOCAyuBBLEWWpC7OFiqQ&s",
                "Scikit-Learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
                "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
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

