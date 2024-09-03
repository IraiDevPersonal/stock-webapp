import IconUserSetting from "@app/core/design-system/icons/IconUserSetting";
import Logout from "./Logout";
import Button from "@app/core/components/Button";
import { Link } from "wouter";
import { path } from "@app/routes/path";

const Profile = () => {
	return (
		<div className="flex justify-start items-center gap-2 p-4">
			<picture className="h-10 w-10 min-w-10 rounded-full flex items-center justify-center bg-default-200 font-semibold">
				US
			</picture>

			<span className="w-44 truncate font-bold group-hover:underline underline-offset-2 text-left">
				Usuario
			</span>

			<div className="flex items-center">
				<Link
					to={path.private.profile}
					asChild
				>
					<Button
						isIconOnly
						variant="light"
						color="default"
						title="Editar perfil"
					>
						<IconUserSetting />
					</Button>
				</Link>
				<Logout />
			</div>
		</div>
	);
};

export default Profile;
