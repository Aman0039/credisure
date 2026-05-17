// LoanCard.jsx
import { motion } from "framer-motion";

const LoanCard = ({ props }) => {

    const image = props.image;
    const title = props.title;
    const description = props.description;
    
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="min-w-[320px] max-w-[320px] bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300"
        >
            <div className="h-44 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-5">
                <h2 className="text-2xl font-bold text-emerald-700 mb-2">
                    {title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default LoanCard;