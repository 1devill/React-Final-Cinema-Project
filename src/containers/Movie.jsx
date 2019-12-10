import React from "react";
import { connect } from "react-redux";
import { Info } from "../components";

export class Movie extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const { match, movies } = this.props;
    const movieId = match.params.id;
    const movie = movies.find(item => item._id === movieId);

    this.setState({ movie });
  }

  getInfoByArray = arr => {
    if (arr[arr.length - 1]) {
      return arr.join(", ");
    } else {
      return arr.join(", ").slice(0, -2);
    }
  };

  render() {
    const { movie } = this.state;
    const language = movie.language;
    const trailer = movie.trailer ? (
      <iframe
        title="trailer"
        src={movie.trailer}
        width={"100%"}
        height={"400px"}
        allowFullScreen
      />
    ) : (
      "No Video"
    );

    console.log(this.state.movie);
    return (
      <div className="movie-info">
        <h1 className="movie-title">{movie.title}</h1>
        <div className="movie-wrapper">
          <div>
            <img src={movie.poster} alt="poster" />
            <div className="btn-container">
              <div className="btn btn-primary">
                <span>BUY</span>
              </div>
            </div>
          </div>
          <div>
            <Info
              className="actors-block"
              title="Actors:"
              content={movie.actors ? this.getInfoByArray(movie.actors) : ""}
            />
            <Info
              className="genre-block"
              title="Genre:"
              content={movie.genre ? this.getInfoByArray(movie.genre) : ""}
            />
            <Info
              className="country-block"
              title="Country:"
              content={movie.country ? this.getInfoByArray(movie.country) : ""}
            />
            <Info
              className="language-block"
              title="Language:"
              content={movie.language ? language : ""}
            />
            <Info
              className="age-block"
              title="Age:"
              content={movie.age ? `${movie.age}+` : "1+"}
            />
            <Info
              className="description-block"
              title="Description:"
              content={movie.description ? movie.description : ""}
            />
            <Info
              className="trailer-block"
              title="Trailer:"
              content={trailer}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);

// import React from "react";
// import { connect } from "react-redux";
// import { Info } from "../components";

// export class Movie extends React.Component {
//   state = {
//     movie: {}
//   };

//   componentDidMount() {
//     const { match, movies } = this.props;
//     const movieId = match.params.id;
//     const movie = movies.find(item => item._id === movieId);

//     this.setState({ movie });
//   }

//   getInfoByArray = (arr) => {
//       if(arr[arr.length - 1]) {
//         return arr.join(', ');
//       } else {
//           return arr.join(', ').slice(0, -2);
//       }
//   }

//   render() {
//     const { movie } = this.state;
//     const language = movie.language;
//     const trailer = movie.trailer ? (
//       <iframe
//         title="trailer"
//         src={movie.trailer}
//         width={"100%"}
//         height={"400px"}
//         allowFullScreen
//       />
//     ) : (
//       "No Video"
//     );

//     console.log(this.state.movie);
//     return (
//       <div className="movie-info">
//         <h1 className="movie-title">{movie.title}</h1>
//         <div className="movie-wrapper">
//           <div>
//             <img src={movie.poster} alt="poster" />
//             <React.Fragment>
//               <div className="btn-container">
//                   <div className="btn btn-primary">
//                       <span>BUY</span>
//                   </div>
//               </div>
//             </React.Fragment>
//           </div>
//           <div>
//             <Info
//               className="actors-block"
//               title="Actors:"
//               content={movie.actors ? this.getInfoByArray(movie.actors) : ""}
//             />
//             <Info
//               className="genre-block"
//               title="Genre:"
//               content={movie.genre ? this.getInfoByArray(movie.genre) : ""}
//             />
//             <Info
//               className="country-block"
//               title="Country:"
//               content={movie.country ? this.getInfoByArray(movie.country) : ""}
//             />
//             <Info
//               className="language-block"
//               title="Language:"
//               content={movie.language ? language : ""}
//             />
//             <Info
//               className="age-block"
//               title="Age:"
//               content={movie.age ? `${movie.age}+` : "1+"}
//             />
//             <Info
//               className="description-block"
//               title="Description:"
//               content={movie.description ? movie.description : ""}
//             />
//             <Info
//               className="trailer-block"
//               title="Trailer:"
//               content={trailer}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   movies: state.data.movies
// });

// export const MovieContainer = connect(mapStateToProps)(Movie);
