import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import AnnuncioSingolo from "./AnnuncioSingolo";

const AltreOfferte = () => {
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  return (
    <Container fluid className="border border-1 border-tertiary bg-white rounded-3 p-0  mt-3">
      <Container className="p-4 pb-0">
        <h5 className="fw-bold">Altre offerte di lavoro per te</h5>
        <p className="text-secondary">
          In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
        </p>
        {loading && <p>Caricamento...</p>}
        {error && <p>Errore: {error}</p>}
        {!loading && !error && jobs.slice(7, 10).map((job) => <AnnuncioSingolo key={job._id} job={job} />)}
      </Container>
      <div className="pb-3">
        <p className="fw-bold text-center mb-0 ">
          Mostra tutto <ArrowRight />
        </p>
      </div>
    </Container>
  );
};
export default AltreOfferte;
