import * as React from 'react'
import axios from 'axios'
import { Maybe } from 'tsmonad'
import { browserHistory }from 'react-router'

import List from "books/list"
import Grid from "books/grid"
import { Book } from 'types'

type ViewType = 'grid' | 'list'

interface State {
    view?:ViewType,
    books?:Maybe<Book[]>
}


interface Props {
    location: { // Ce champ est rempli automatiquement par react-router après le mount du composant dans le DOM
        query?: { // Le champ query ne sera rempli que s'il est présent dans la barre d'adresse du navigateur
            view: ViewType
        }
    }
}

const styles = require('./styles.scss')

export default class Books extends React.Component<Props, State> {
    public constructor(props: any) {
        super(props)
        this.state = {
            view: 'list',
            books: Maybe.nothing<Book[]>()
        }
        // this.props.location n'est pas encore disponible ici
    }

    public componentDidMount() {
        // Ici, on peut accéder aux détails de l'URL et vérifier si on a une query
        if(this.props.location.query){
            const view = this.props.location.query.view

            // Verifier que view est bien 'grid' ou 'list'
            if(this.isValidViewType(view)){
                this.doChangeView(view)
            }
        }

        // Récupérer la liste de livres
        axios.get('http://codeberry.fr/1/books')
            .then(response => {
                this.setState(Object.assign(this.state, {
                    books: Maybe.just(response.data)
                }))
            })
            .catch(error => {
                // TODO: deal with error case
                console.log(error);
            });
    }

    // Cette méthode du lifecycle permet de détecter les changements de props, et de changer le state en conséquence
    public componentWillReceiveProps(nextProps: Props){

        // La query n'est peut-etre pas définie dans les nouvelles props
        const viewFromURLQuery = nextProps.location.query && nextProps.location.query.view

        // On vérifie que le parametre view vaut bien 'grid' ou 'list'
        if(this.isValidViewType(viewFromURLQuery)){

            // On vérifie que les props ont bien changé avant de modifier le state
            if(this.state.view !== viewFromURLQuery){
                this.doChangeView(viewFromURLQuery as ViewType)
            }
        }
    }

    private doChangeView = (view: ViewType) => {
        this.setState({
            view: view
        })
    }

    private isValidViewType = (viewType: string) => {
        return viewType === 'list' || viewType === 'grid'
    }

    private switchView() {
        const newView = this.state.view === 'list' ? 'grid' : 'list'
        browserHistory.push('/books?view=' + newView)
    }

    private getSwitchViewButton(){
        const buttonLabel = this.state.view === 'list' ? 'Vue Grille' : 'Vue Liste'
        return <div className={styles.buttonContainer}>
            <button  className={styles.switchViewModeButton} onClick={() => this.switchView()}>{buttonLabel}</button>
        </div>
    }

    public render() {
        return this.state.books.caseOf({
            just: (books:Book[]) => {
                const bookView = this.state.view === 'grid' ? <Grid books={books}/> : <List books={books}/>
                return <div>
                    {this.getSwitchViewButton()}
                    {bookView}
                </div>
            },
            nothing: () => <div className={styles.loading}>
                <span>Loading...</span>
            </div>
        })
    }
}